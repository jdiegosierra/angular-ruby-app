class Article < ApplicationRecord
	has_many :comments
	validates :text, presence: true, length: { minimum: 5 }
	validates :title, presence: true, length: { minimum: 1 }
end
