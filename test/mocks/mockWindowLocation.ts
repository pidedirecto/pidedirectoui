export function mockWindowLocation(url: string): void {
    const location = new URL(url);
    (location as any).assign = vi.fn();
    (location as any).replace = vi.fn();
    (location as any).reload = vi.fn();

    vi.spyOn(window, 'location', 'get').mockReturnValue(location as any);
}
