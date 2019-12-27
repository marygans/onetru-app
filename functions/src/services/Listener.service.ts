export class ListenerService {
    private static instance: ListenerService;
    private readonly activeListeners: Map<string, any> = new Map<string, any>();

    private constructor() { }

    static getInstance() {
        if (!ListenerService.instance) {
            ListenerService.instance = new ListenerService();
        }
        return ListenerService.instance;
    }

    saveListeners(key: string, listener: any): void {
        const listeners: any[] = this.getListeners(key);
        listeners.push(listener);

        this.activeListeners.set(key, listeners);
    }

    getListeners(key: string): any {
        const _listeners = this.activeListeners.get(key);

        return _listeners ? _listeners : [];
    }

    detachListeners(key: string): void {
        const listeners: any[] = this.getListeners(key);
        listeners.forEach((listener: any) => listener());
        this.removeActiveListeners(key);
    }

    private removeActiveListeners(key: string): void {
        this.activeListeners.delete(key);
    }
}

const listenerService = ListenerService.getInstance();

export default listenerService;
export { listenerService };
