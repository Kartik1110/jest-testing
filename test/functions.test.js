import { jest, describe, test, it, expect } from "@jest/globals";
import { add, average, flatten, mostFrequent } from "../src/functions";

/* add */
describe("add function testing", () => {
	it("should add 2 numbers", () => {
		const result = add(1, 2);
		expect(result).toBe(3);
	});
});

/* average */
describe("average function testing", () => {
	it("should return average of array of numbers", () => {
		const array = [1, 2, 3];
		expect(average(array)).toEqual(2);
	});
	it("should return return error for empty array", () => {
		const array = [];
		expect(average(array)).toBeNaN();
	});
});

/* mostFrequent */
describe("mostFrequent function testing", () => {
	it("should check mostFrequent with correct arguments and return correct value", () => {
		const arr = ["a", "b", "b", "b", "c", "c"];
		expect(mostFrequent(arr)).toBe("b");
	});
	it("should check mostFrequent with empty array and return error", () => {
		jest.spyOn(process.stdout, "write").mockImplementation(() => jest.fn());
		mostFrequent(1);
		expect(process.stdout.write).toBeCalledWith("Please enter a valid input!");
	});
});

describe("flatten function testing", () => {
	it("should test flatten function with correct arguments and return correct value", () => {
		const arr = [1, [2, 3], 4, [5, 6]];
		const expectedResult = [1, 2, 3, 4, 5, 6];
		expect(flatten(arr)).toEqual(expectedResult);
	});
	it("should test flatten function with empty array", () => {
		const arr = [];
		jest.spyOn(process.stdout, "write").mockImplementation(() => jest.fn());
		flatten(arr);
		expect(process.stdout.write).toBeCalledWith("Please enter a valid input!");
	});
});
