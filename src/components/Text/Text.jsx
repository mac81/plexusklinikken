import React, { Component } from 'react';
import marked from 'marked';

class Text extends Component {
    render() {

        marked.setOptions({
            breaks: true
        });

        return (
            this.props.children && (<div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(this.props.children)}} />)
        );
    }
}

export default Text;
