export interface Article {
  id: 0,
  featured: false,
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: string | number | Date,
  launches: [
    {
      id: 'string',
      provider: 'string'
    }
  ],
  events: [
    {
      id: 'string',
      provider: 'string'
    }
  ]
}