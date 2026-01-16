import { Data } from "effect";

export class NotGitRepo extends Data.TaggedError("NotGitRepo")<{
  path: string;
}> {}

export class UncommittedChanges extends Data.TaggedError("UncommittedChanges")<{
  path: string;
}> {}

export class GitError extends Data.TaggedError("GitError")<{
  operation: string;
  cause?: unknown;
}> {}

export class FileError extends Data.TaggedError("FileError")<{
  operation: string;
  path: string;
  cause?: unknown;
}> {}
