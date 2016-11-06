import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import Layout from '../components/Layout';

import { Text } from '../components';

class Article extends Component {

    render() {
        let { article } = this.props;

        if(!article) return <div>No article found</div>;

        return (
            <Layout location={this.props.location}>
                <section className="first">
                    <article className="article">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{article.fields.title}</h1>
                            <p className="excerpt centered">{article.fields.summary}</p>
                            {/*image && (
                                <div className="">
                                    <img src={image.fields.file.url} alt={image.fields.file.fileName}/>
                                </div>
                            )*/}
                            <Text>{article.fields.body}</Text>
                        </div>
                    </article>
                </section>
            </Layout>
        );
    }
}

// Article.propTypes = {
//     service: PropTypes.object,
//     assets: PropTypes.object,
//     location: PropTypes.object
// }

function mapStateToProps(state, props) {
    const article = state.entries[state.activeEntry];

    // console.log('Trigger');
    // const assets = {
    //     image: article && state.assets && values(state.assets).find(image => image.sys.id === article.fields.image.sys.id)
    // }

    return {
        article: article
        //assets: assets
    }
}

export default connect(mapStateToProps)(Article);
