// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import marked from 'marked';
//
// class Treatment extends Component {
//
//     render() {
//         if(!this.props.entries) return null;
//         let treatment = this.props.entries && this.props.entries.find(treatment => treatment.fields.treatmentType === this.props.activeTreatment);
//         if(!treatment) return null;
//
//         return (
//             <article className="article">
//                 <div className="article-content">
//                     <h1 className="heading-xlarge centered">{treatment.fields.name}</h1>
//                     <p className="excerpt centered">{treatment.fields.summary}</p>
//                     <div className="wysiwyg" dangerouslySetInnerHTML={{__html: marked(treatment.fields.body)}} />
//                 </div>
//             </article>
//         );
//     }
// }
//
// export default connect(
//         state => ({
//             activeTreatment: state.activeTreatment,
//             entries: state[state.activePage].entries
//         })
//     )(Treatment)
