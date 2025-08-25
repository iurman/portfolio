import { factories } from '@strapi/strapi';
import type { UID } from '@strapi/strapi';

export default factories.createCoreController('api::post.post' as UID.ContentType);
