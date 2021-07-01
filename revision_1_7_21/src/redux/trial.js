const initialState =  {count: 0}

function userreducer(state = initialState, action) {
    switch (action.type) {
        case 'incmembercount':
            return {...state, count: state.value + 1}
        case 'decmembercount':
            return {...state, count: state.value - 1}
        default:
            return state

    }
}

const store = Redux.createStore(userreducer)
///
const count = document.getElementById('value')

function render() {
    const state = store.getState()
    count.innerHTML = state.value.toString()
}
///
document.getElementById('increment').addEventListener('click', function(){
    store.dispatch({type: 'incmembercount'})
})

document.getElementById('decrement').addEventListener('click', function () {
    store.dispatch({type: 'decmembercount'})
})


