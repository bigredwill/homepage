import React from 'react'
import graphql from 'graphql'
import marked from 'marked'
import Img from "gatsby-image";

import Navbar from '../components/Navbar'

class IndexPage extends React.Component {
  render() {
    const { bio, headshot, name, tagline } = this.props.data.contentfulAbout
    return (
      <div>
        <div className="fn fl-ns w-40-ns pr4-ns">
          <Navbar name={name} tagline={tagline.tagline} />
        </div>
        <div className="fn fl-ns w-60-ns pt4-ns lh-copy">
          <div
            dangerouslySetInnerHTML={{
              __html: marked(bio.bio),
            }}
          />
        </div>
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    contentfulAbout {
      bio {
        id
        bio
      }
      name
      tagline {
        tagline
      }
      headshot {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`
