/**
 * file system utilities
 *
 * effect-based file operations
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { Effect } from "effect";
import { FileError } from "./types";

export const ensureDir = (path: string): Effect.Effect<void, FileError> =>
  Effect.try({
    try: () => {
      if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
      }
    },
    catch: (cause) => new FileError({ operation: "mkdir", path, cause }),
  });

export const readJson = <T>(path: string): Effect.Effect<T | null, FileError> =>
  Effect.try({
    try: () => {
      if (!existsSync(path)) return null;
      const content = readFileSync(path, "utf-8");
      return JSON.parse(content) as T;
    },
    catch: (cause) => new FileError({ operation: "read", path, cause }),
  });

export const writeJson = <T>(
  path: string,
  data: T,
): Effect.Effect<void, FileError> =>
  Effect.try({
    try: () => {
      const dir = dirname(path);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      writeFileSync(path, JSON.stringify(data, null, 2));
    },
    catch: (cause) => new FileError({ operation: "write", path, cause }),
  });
