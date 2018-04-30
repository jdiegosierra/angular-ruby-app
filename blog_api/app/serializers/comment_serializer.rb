class CommentSerializer < ActiveModel::Serializer
  #attributes :id, :commenter, :body, :created_at, :updated_at
  attributes :id, :commenter, :body, :created_at, :updated_at, :article_id, :article
  has_one :article
end
