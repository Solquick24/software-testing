const sendMessage = require("../src/sendMessage");

test("jest.fn: 함수 호출 기록 확인", () => {
    const mockApi = {
        send: jest.fn()
    };

    sendMessage(mockApi, "hello");

    console.log(mockApi.send.mock.calls);
});

test("toHaveBeenCalled: 함수가 호출됐는지 확인", ()=>{
    const mockApi = {
        send: jest.fn()
    };

    //sendMessage(mockApi, "wrong");
    sendMessage(mockApi, "hello");
    expect(mockApi.send).toHaveBeenCalled();
});

test("toHaveBeenCalledWith: 올바른 값으로 호출됐는지 확인", () => {
    const mockApi = {
        send: jest.fn()
    };
    
    // sendMessage(mockApi, "wrong");
    sendMessage(mockApi, "hello");
    expect(mockApi.send).toHaveBeenCalledWith("hello");
});

test("jest.spyOn: 기존 함수 호출 감시", () => {
    const api = {
        send: (msg) => { // 추적(감시) 대상: send() 함수
            console.log("send:", msg);
        }
    };

    const spy = jest.spyOn(api, "send");

    sendMessage(api, "hello");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("hello");
});


// jest.spyOn은 진짜 함수를 호출하여 기록 및 저장을 수행

