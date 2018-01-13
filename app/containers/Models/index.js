import React from 'react';

import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';


class Models extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null,
    };

    const linkResolver = function (doc) {
      // Pretty URLs for known types
      if (doc.type === 'blog') return `/post/${doc.uid}`;
      if (doc.type === 'page') return `/${doc.uid}`;
      // Fallback for other types, in case new custom types get created
      return `/doc/${doc.id}`;
    };
  }


  componentWillMount() {
    const apiEndpoint = 'https://mb85photov2.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then((api) => {
      api.query('').then((response) => {
        if (response) {
          this.setState({ doc: response.results });
        }
      });
    });
  }


  render() {
    if (this.state.doc) {
      return (
        <div>
          <img src={this.state.doc[0].data.frontimage.url} alt="Anna Ilina" />
          This is the new render from prismic.
        </div>
      );
    }
    return (
      <div>
        This is the models page.
      </div>
    );
  }
}

export default Models;
