const sendMessage = require('../src/sendMessage');

test("jest.fn: 함수 호출 기록 확인", () => {
    const mockApi = {
        send: jest.fn()
    };

    sendMessage(mockApi, "Hello");

    console.log(mockApi.send.mock.calls); // 호출된 인자 확인
});

test("toHaveBeenCalled: 함수가 호출되었는지 확인", () => {
    const mockApi = {
        send: jest.fn()
    };

    sendMessage(mockApi, "Hello");

    expect(mockApi.send).toHaveBeenCalled();
});

test("toHaveBeenCalledWith: 함수가 특정 인자로 호출되었는지 확인", () => {
    const mockApi = {
        send: jest.fn()
    };

    sendMessage(mockApi, "Hello");

    expect(mockApi.send).toHaveBeenCalledWith("Hello");
});

test("jestspyOn: 기존 함수 호출 감시", () => {
    const api = {
        send: (msg) => {
            console.log("send:", msg);
        }
    };

    const spy = jest.spyOn(api, 'send');

    sendMessage(api, "Hello");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Hello");
});