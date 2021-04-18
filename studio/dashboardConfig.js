export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '607c88ecc077861a88b59ff3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4qd9q2dm',
                  apiId: '107a31a9-e70e-4cf9-87d2-75b5dbddec21'
                },
                {
                  buildHookId: '607c88edd0ab1ceaf3a6f44c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qme9tuua',
                  apiId: '3f510533-9c56-4bd3-bb60-6edce55a1491'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sameepa87/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qme9tuua.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
