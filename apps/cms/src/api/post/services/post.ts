import { factories } from '@strapi/strapi';
import type { UID } from '@strapi/strapi';

export default factories.createCoreService('api::post.post' as UID.ContentType);
