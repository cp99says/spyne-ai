const user = require('./../models/user')
const discussion = require('./../models/discussion')
const { validatelikeDiscussionSchema, validateviewCountDiscussionSchema,
    validatefollowUserSchema, validateCommentSchema } = require('./validation')

class Activity {
    async likeDiscussion(req, res) {
        const { error } = validatelikeDiscussionSchema(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const { action, postId } = req.body
        const userId = req.user.user_id;
        const postDetails = await discussion.findOne({ "postId": postId }, { "likes": 1, "_id": 0, "postId": 1 })
        if (!postDetails) {
            return res.status(400).send({
                "message": "post id is invalid"
            })
        }
        if (action == 'like') {
            var post_liked = false
            postDetails.likes.forEach((element) => {
                if (element.userId == userId) {
                    post_liked = true
                }
            })
            if (post_liked) {
                return res.status(401).json({
                    "status": false,
                    "message": "already liked"
                })
            }
            const discussion_updated = await discussion.updateOne(
                { postId: postId },
                { $push: { likes: { userId: userId } } }
            );

            return res.json({
                status: 'success',
                message: 'Liked the discussion post successfully',
                data: discussion_updated,
            });
        }
        else {
            const discussion_updated = await discussion.updateOne(
                { postId: postId },
                { $pull: { likes: { userId: userId } } }
            );
            return res.json({
                status: 'success',
                message: 'Disliked the discussion post successfully',
                data: discussion_updated,
            });
        }

    }
    async viewCountDiscussion(req, res) {
        const { error } = validateviewCountDiscussionSchema(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
    }
    async followUser(req, res) {
        const { error } = validatefollowUserSchema(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
    }
    async comment(req, res) {
        const { error } = validateCommentSchema(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
    }
}

module.exports = new Activity()