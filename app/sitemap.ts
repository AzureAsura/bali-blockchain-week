import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://baliblockchainweeks.com',
            lastModified: new Date(),
        },
        {
            url: 'https://baliblockchainweeks.com/sponsorship',
            lastModified: new Date(),
        },
        {
            url: 'https://baliblockchainweeks.com/media',
            lastModified: new Date(),
        },
    ]
}