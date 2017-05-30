import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component{
	renderF(field){
			//only show error msg after user touch the area
		    const { meta: { touched, error } } = field;
    		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return(
			<div className={className}>
			 <input type="text" placeholder={field.lable} className="form-control" {...field.input} />
			 {field.meta.touched?field.meta.error:''}
			</div>
			);
	}
	
	onSubmit(values){
		console.log('submit');
	}
	render(){
		const {handleSubmit} =this.props;
		return(
		//reduxForm IS VALID then Submit
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="title" lable="title" component={this.renderF}/>
					<Field name="catagory" lable="catagory" component={this.renderF}/>
					<Field name="content" lable="content" component={this.renderF}/>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			);
	}
}
//values is the values entered in the form
function validateF(values){
	const errors={};

	if((!values.title)||values.title.length<3){
		errors.title="Enter a title larger than 3";
	}

	//if errors is empty , then it's validate
	//props in error map the name in Field
	return errors;
}
//form name just unique
export default reduxForm({form: 'PostsNewForm', validate:validateF})(NewPost);