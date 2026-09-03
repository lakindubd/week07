import { describe, it, expect } from "vitest";

describe("CI gate demonstration", () => {
  it("fails on purpose to prove build-and-push is blocked", () => {
    expect(1 + 1).toBe(3);
  });
});