exports.createPages = async ({ actions : { createPage }}) => {
    const userCount = 4;
  
    for(let userId = 1; userId < userCount; userId++){
      createPage({
        path: `users/${userId}`,
        component: require.resolve('./src/templates/user.js'),
        context: { userId }
      })
    }
  }