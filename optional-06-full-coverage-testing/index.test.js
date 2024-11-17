import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should return zero if parameters its not a number", () => {
  // Arrange
  const operandA = "1";
  const operandB = "1";

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should return zero if parameters its less than zero", () => {
  // Arrange
  const operandA = -1;
  const operandB = -1;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 0;
  assert.equal(actualValue, expectedValue);
});

test("should add correctly", () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = sum(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});
