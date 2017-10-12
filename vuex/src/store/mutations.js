import * as types from './mutation-types'
import state from './state'

export default {
	[types.ICREAMENT] (state) {
		state.count++
	}
}