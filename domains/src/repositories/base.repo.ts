import { Result } from '../util-types';

export interface BaseRepo<Domain> {
  findById(id: string): Promise<Result<Domain>>;
  count(): Promise<Result<number>>;
  create(domain: Domain): Promise<Result<Domain>>;
  update(id: string, domain: Domain): Promise<Result<Domain>>;
  delete(id: string): Promise<Result<boolean>>;
  findMany(query?: any, projection?: any): Promise<Result<Domain[]>>;
  bulkInsert(domains: Domain[]): Promise<Result<Domain[]>>;
  bulkSave(domains: Domain[]): Promise<Result<boolean>>;
  save(domain: Domain): Promise<Result<Domain>>;
  findManyByIds(ids: string[]): Promise<Result<Domain[]>>;
  isManyExistedByIds(ids: string[]): Promise<Result<boolean>>;
  isExisted(id: string): Promise<Result<boolean>>;
}
