// ReactDOM.render(
//   <ImageComponent src="http://voices.nationalgeographic.com/files/2013/04/NationalGeographic_1467467.jpg" width="500" />,
//   document.getElementById('container')
// );

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Image extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        }
        this.mounted = false;
    }

    onImageLoad() {
        if (this.mounted) {
            this.setState({ loaded: true });
        }
    }

    componentDidMount() {
        this.mounted = true;
        var imgTag = ReactDOM.findDOMNode(this.refs.img);
        var imgSrc = imgTag.getAttribute('src');
        var img = new window.Image();
        img.onload = this.onImageLoad;
        img.src = imgSrc;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        var { className, ...props } = this.props;
        var rootClassName = className ? className + ' image' : 'image';
        if (this.state.loaded) {
            rootClassName += ' image-loaded';
        }
        return <img ref="img" {...props} className={rootClassName} />;
    }
}

export default Image;
