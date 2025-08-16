// Jest setup file - runs before each test file

// Set up global test timeout
jest.setTimeout(10000);

// Global test utilities
global.testUtils = {
  // Helper to create mock data
  createMockData: (template, overrides = {}) => ({
    ...template,
    ...overrides
  }),
  
  // Helper to wait for async operations
  wait: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  
  // Helper to create a mock function with default implementation
  createMockFn: (defaultImpl = jest.fn()) => {
    const mockFn = jest.fn(defaultImpl);
    mockFn.mockClear = jest.fn();
    mockFn.mockReset = jest.fn();
    mockFn.mockRestore = jest.fn();
    return mockFn;
  }
};

// Console logging during tests (optional - comment out if you don't want console output)
// console.log = jest.fn();
// console.error = jest.fn();
// console.warn = jest.fn(); 