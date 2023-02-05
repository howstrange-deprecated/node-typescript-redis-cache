import Redis from "ioredis";

export default new class CacheService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis();
  }

  public async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  public async set(key: string, value: string): Promise<void> {
    const parsingValue = JSON.stringify(value);

    await this.redis.set(key, parsingValue);
  }
}
