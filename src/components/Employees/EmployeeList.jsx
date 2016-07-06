import React, { Component, PropTypes } from 'react';

// Components
import Employee from './Employee';

// Styles
import styles from './employeeList.scss';

class EmployeeList extends Component {
    render() {
        return (
            <div className={styles.employeeList}>
                <h2 className="heading-medium centered inverted">Våre Osteopater</h2>
                <div className={styles.employees}>
                    {this.props.employees && this.props.employees.map(employee => (
                        <Employee
                            id={employee.sys.id}
                            name={employee.fields.name}
                            position={employee.fields.position}
                            image={employee.fields.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

EmployeeList.propTypes = {
    employees: PropTypes.array
}

export default EmployeeList;
