import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    console.log(this.props)
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(params)
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const upDatedData = {
      imageUrl: data.image_url,
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
      id: data.id,
    }
    this.setState({blogData: upDatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
