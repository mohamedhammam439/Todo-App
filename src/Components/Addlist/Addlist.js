import React , {Component} from 'react';
import './Addlist';

class Addlist extends Component {

    state={
        id:'',
        name:'',
        hours:''
    }

    handelchange = (e) => {
        this.setState ({
            [e.target.id] : e.target.value
        })
    }

    handelsubmit = (e) => {
        e.preventDefault();
        if (e.target.id.value === '' || e.target.name.value==='' || e.target.hours.value===''){
            return false
        }else{
         this.props.addlist(this.state)
         this.setState({
             id:'',
             name:'',
             hours:''
         })
        }
    }

    render() {
        return(
            <div className='add'>
                <form onSubmit={this.handelsubmit}>
                    <input type='number' placeholder='num' onChange={this.handelchange} id='id' value={this.state.id} />
                    <input type='text' placeholder='Add Action' onChange={this.handelchange} id='name' value={this.state.name}/>
                    <input type='number' placeholder='Hours' onChange={this.handelchange} id='hours'value={this.state.hours} />
                    <input type='submit' value='Add' id='act' />
                </form>
            </div>
        )
    }
}
export default Addlist;