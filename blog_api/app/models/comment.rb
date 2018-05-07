class Comment < ApplicationRecord
  belongs_to :article, optional: true
  validates :body, presence: true, length: { minimum: 5 }
  validates :commenter, presence: true, length: { minimum: 1 }
end
