class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commenter, :body
  has_one :article
end
