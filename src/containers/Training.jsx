import React, { Component } from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';

import Layout from '../components/Layout';
import EmployeeBadge from '../components/Employees/EmployeeBadge';

import styles from '../scss/_training.scss';

class Training extends Component {
    render() {
        console.log(this.props.employees);
        let { pageTitle, pageSummary } = this.props;

        return (
            <Layout location={this.props.location}>
                <div className={styles.header}>
                    <div className={styles.bg}>
                        <div>
                            <h1 className="heading-xlarge">{pageTitle}</h1>
                            <h2 className="heading-medium">{pageSummary}</h2>
                        </div>
                    </div>
                </div>
                <section>
                    <article className="centered">
                        <h2 className="heading-large t1"><span>Personlige trenere</span></h2>
                        <p>Våre personlige trenere har høyskoleutdanning innen personlig trening og osteopati. De har bred erfaring med ulike treningsformer, og spesialkompetanse til å tilrettelegge individuelle treningsprogram.</p>
                    </article>
                    <ul className={styles.employees}>
                        {this.props.employees && this.props.employees.map(e => (
                            <EmployeeBadge name={e.fields.name} id={e.sys.id} position={e.fields.position} image={e.fields.profileImage2} />
                        ))}
                    </ul>
                </section>
                <section className="neutral-dark-2">
                    <article>
                        <h1>Plexus prestasjon</h1>
                        <p>Plexus prestasjon er samarbeidspartneren for deg som ønsker å ta din trening eller idrett til et nytt nivå. Vårt tverrfaglige samarbeid mellom coacher, trenere og terapeuter sørger for at du på en trygg og effektiv måte når dine mål. Vi setter deg som utøver i sentrum, og gjennom screening og testing finner vi den optimale fremgangsmåten for å nå dine mål. Vår filosofi er at variert trening med like deler mobilitet, stabilitet og styrke, gir det aller beste grunnlag for en sterk og skadefri kropp. Når disse elementer er på plass kan vi legge til den idrettsspesifikke treningen eller spissingen som du trenger for å nå dine mål. Uansett hvor du måtte begynne, er vi med deg - hele veien.</p>
                    </article>
                </section>
            </Layout>
        );
    }
}

function mapStateToProps(state, props) {

    const employees = [];
    if(state.pages[state.activePage]) {
        state.pages[state.activePage].employees.map(id => {
            let entry = state.entries && values(state.entries).find(entry => entry.sys.id === id);
            employees.push(entry);
        });
    }

    return {
        pageTitle: state.pages[state.activePage] ? state.pages[state.activePage].title : null,
        pageSummary: state.pages[state.activePage] ? state.pages[state.activePage].summary : null,
        employees
    }
}

export default connect(mapStateToProps)(Training);
