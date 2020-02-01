// While using js files you will need to add babel transpiler with transform processor else will get error
import { test } from "./functionjs";



// Importing from ts will work because we added ts-jest as transform processor
//import { test } from "./function";

describe("Print", () => {
    it("Test", () => {
        console.log(test("Krishna"))
    })
})