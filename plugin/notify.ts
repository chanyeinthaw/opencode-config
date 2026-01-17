/**
 * notify plugin - plays sound on task completion
 *
 * uses macos afplay to play system sounds when:
 * - session becomes idle (response complete)
 */

import type { Plugin } from "@opencode-ai/plugin";

const SOUNDS = {
  success: "/System/Library/Sounds/Glass.aiff",
  error: "/System/Library/Sounds/Basso.aiff",
  complete: "/System/Library/Sounds/Ping.aiff",
  // complete: "~/.config/opencode/sound/idle.mp3",
};

async function playSound(sound: keyof typeof SOUNDS): Promise<void> {
  try {
    Bun.spawn(["afplay", SOUNDS[sound]], {
      stdout: "ignore",
      stderr: "ignore",
    });
  } catch {}
}

export const NotifyPlugin: Plugin = async (ctx) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await playSound("complete");
      }
    },
  };
};

export default NotifyPlugin;
