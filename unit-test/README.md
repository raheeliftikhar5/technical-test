# Unit Tests with Jest

This directory contains the Jest testing setup for JavaScript unit tests.

## Setup

1. **Install dependencies:**
   ```bash
   cd unit-test
   npm install
   ```

2. **Run tests:**
   ```bash
   # Run all tests
   npm test
   
   # Run tests in watch mode (re-runs on file changes)
   npm run test:watch
   
   # Run tests with coverage report
   npm run test:coverage
   
   # Run tests with verbose output
   npm run test:verbose
   ```

## Test Scenarios for calcBillingPeriods Function

### INPUT VALIDATION SCENARIOS:

1. **periodYear validation:**
   - Must start with '2' (2000s range)
   - Must be exactly 4 digits
   - Must be a string
   - Invalid: 1999, 3000, 'abc', '', null, undefined, 2024 (number)

2. **cutoffDate validation:**
   - Must be between 1 and 31 (inclusive)
   - Must be a number
   - Invalid: 0, -1, 32, 50, 100, 'abc', '', null, undefined

### VALID INPUT SCENARIOS:

3. **Basic functionality:**
   - Valid inputs return array with 12 billing periods
   - Each period has start_date, end_date, and month properties

4. **Boundary conditions:**
   - cutoffDate = 1 (first day of month)
   - cutoffDate = 15 (middle of month - typical business scenario)
   - cutoffDate = 31 (last day of month)

### BILLING PERIOD STRUCTURE SCENARIOS:

5. **Object structure validation:**
   - Each period must have start_date, end_date, month properties
   - month format: YYYY-MM-01 (first day of each month)

6. **Month generation:**
   - 12 months in chronological order (Jan-Dec)
   - Correct year-month combinations
   - Proper month padding (01, 02, etc.)

### YEAR BOUNDARY HANDLING SCENARIOS:

7. **January period (index 0):**
   - start_year = previous year (periodYear - 1)
   - start_month = 12 (December)
   - end_year = current year (periodYear)
   - end_month = 1 (January)

8. **December period (index 11):**
   - start_year = current year (periodYear)
   - start_month = 11 (November)
   - end_year = current year (periodYear)
   - end_month = 12 (December)

### EDGE CASES SCENARIOS:

9. **Leap year handling:**
   - February with 29 days (2024)
   - February with 28 days (2023)

10. **Different years:**
    - 2025, 2030, etc.
    - Year transition logic

### DATE FORMATTING SCENARIOS:

11. **Day padding:**
    - Single digits get leading zeros (5 -> 05)
    - Double digits remain unchanged (15 -> 15)

12. **Month padding:**
    - Single digits get leading zeros (1 -> 01)
    - Double digits remain unchanged (12 -> 12)

### FUNCTION CALL VERIFICATION SCENARIOS:

13. **Helper function calls:**
    - nearestNextValidDate called 12 times (once per month)
    - nearestPrevValidDate called 12 times (once per month)
    - moment called 12 times (once per month)

14. **Parameter validation:**
    - Correct date strings passed to helper functions
    - Correct format strings passed to moment

### INTEGRATION SCENARIOS:

15. **Business use cases:**
    - 15th of month billing (most common)
    - 1st of month billing
    - 31st of month billing

16. **Cross-year billing:**
    - December to January transition
    - Year boundary calculations

### ERROR HANDLING SCENARIOS:

17. **Invalid input responses:**
    - Return false for invalid inputs
    - No exceptions thrown
    - Graceful degradation

18. **Edge case robustness:**
    - Handles invalid dates gracefully
    - Works with helper function failures
    - Consistent return types
