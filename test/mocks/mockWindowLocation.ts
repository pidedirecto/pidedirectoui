export function mockWindowLocation(url: string): void {
    const location = new URL(url);
    (location as any).assign = jest.fn();
    (location as any).replace = jest.fn();
    (location as any).reload = jest.fn();

    jest.spyOn(window, 'location', 'get').mockReturnValue(location as any);
}
