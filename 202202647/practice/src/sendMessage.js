function sendMessage(api, message) {
    api.send(message);
}

test("jest.fn: 함수 호출 기록 확인", () => {
    const mockApi = {
        send: jest.fn()
};

    sendMessage(mockApi, "hello");

    console.log(mockApi.send.mock.calls);
});

module.exports = sendMessage;