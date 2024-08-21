export const mapUser = (user) => ({
    id: user._id,
    username: user.username,
    email: user.email,
    description: user.desc,
    avatarUrl: user.avatar_url,
    backgroundUrl: user.background_url,
    registeredAt: user.createdAt,
});
