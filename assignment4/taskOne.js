const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-09-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-09-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-09-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-09-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-09-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-09-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-09-14T07:00:00", likes: 11 }
      ]
    }
];
  
// Set the date to one week ago
const oneWeekAgo = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
};

// Filter active users
function userAnalysis(users) {
    const oneWeekAgoDate = oneWeekAgo();
    return users.filter((user) => {
        return user.posts.some(post => new Date(post.timestamp) >= oneWeekAgoDate);
    });
}

// Extract popular posts 
function popularPosts(activeUsers) {
    return activeUsers.map((user) => {
        const popularPosts = user.posts.filter(post => post.likes >= 10);
        return { ...user, popularPosts }; // user with their popular posts
    }).filter(user => user.popularPosts.length > 0); // Keep only users with popular posts
}


function analyzeUsers(users) {
    const activeUsers = userAnalysis(users); // Get active users
    const activeUsersWithPopularPosts = popularPosts(activeUsers); // Get active users with popular posts

    // Reduce to calculate total likes and popular posts
    const { totalLikes, totalPopularPosts } = activeUsersWithPopularPosts.reduce(
        (acc, user) => {
            const userLikes = user.popularPosts.reduce((likes, post) => likes + post.likes, 0);
            return {
                totalLikes: acc.totalLikes + userLikes,
                totalPopularPosts: acc.totalPopularPosts + user.popularPosts.length
            };
        },
        { totalLikes: 0, totalPopularPosts: 0 }
    );

    //Calculate the average likes per active user
    const totalActiveUsers = activeUsersWithPopularPosts.length;
    const averageLikesPerActiveUser = totalActiveUsers > 0 ? totalLikes / totalActiveUsers : 0;

    console.log(`Total Likes: ${totalLikes}`);
    console.log(`Total Popular Posts: ${totalPopularPosts}`);
    console.log(`Average Likes Per Active User: ${averageLikesPerActiveUser}`);
}


analyzeUsers(users);