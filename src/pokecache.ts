export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    add<T>(key: string, value: T) {
        const entry = {
            createdAt: Date.now(),
            val: value
        };
        this.#cache.set(key, entry);
    }

    get<T>(key: string) {
        const value = this.#cache.get(key);
        if (value !== undefined) {
            return value.val as T;
        };
    }

    #reap() {
        for (const [key, entry] of this.#cache) {
            if (Date.now() - entry.createdAt > this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
    }

    stopReapLoop() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}