import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import marked from 'marked';

import Layout from '../components/Layout';

//import styles from '../scss/_button.scss';

class Service extends Component {

    render() {
        let { service, assets: { image } } = this.props;

        if(!service) return null;

        return (
            <Layout location={this.props.location}>
                <section>
                    <article className="article">
                        <div className="article-content">
                            <h1 className="heading-xlarge centered">{service.fields.name}</h1>
                            <p className="excerpt centered">{service.fields.summary}</p>
                            {/*image && (
                                <div className="">
                                    <img src={image.fields.file.url} alt={image.fields.file.fileName}/>
                                </div>
                            )*/}
                            <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(service.fields.body)}} />
                        </div>
                    </article>
                </section>
            </Layout>
        );
    }
}

Service.propTypes = {
    service: PropTypes.object,
    assets: PropTypes.object,
    location: PropTypes.object
}

function mapStateToProps(state) {
    //const service = state[state.activePage].services && state[state.activePage].services.find(service => service.fields.slug == state.activeService);
    const service = state.entries[state.activeEntry];
    // const assets = {
    //     image: service && state[state.activePage].assets && state[state.activePage].assets.find(image => image.sys.id === service.fields.image.sys.id)
    // }
    const assets = {
        image: service && state.assets && values(state.assets).find(image => image.sys.id === service.fields.image.sys.id)
    }

    return {
        service: service,
        assets: assets
    }
}

export default connect(mapStateToProps)(Service);
