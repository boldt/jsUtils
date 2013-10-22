/**
 * #############################################################################
 * jsUtils -  Common Javascript Utilities 
 * #############################################################################
 */


/*
 * #############################################################################
 * Array Utils
 * #############################################################################
 */

	// @see: http://stackoverflow.com/a/9815010
	if (typeof Array.prototype.remove != 'function') {
		Array.prototype.remove = function(from, to) {
			var rest = this.slice((to || from) + 1 || this.length);
			this.length = from < 0 ? this.length + from : from;
			return this.push.apply(this, rest);
		};
	}

	// @see: http://stackoverflow.com/a/17368101
	if (typeof Array.prototype.extend != 'function') {
		Array.prototype.extend = function (other_array) {
			/* you should include a test to check whether other_array really is an array */
			other_array.forEach(function(v) {this.push(v)}, this);    
		}
	}

	// @see: http://stackoverflow.com/a/237176
	if (typeof Array.prototype.contains != 'function') {
		Array.prototype.contains = function(obj) {
			var i = this.length;
			while (i--) {
				if (this[i] === obj) {
				    return true;
				}
			}
			return false;
		}
	}

	if (typeof Array.prototype.implode != 'function') {
		Array.prototype.implode = function(delimiter) {
			this.join(delimiter);
		}
	}

/*
 * #############################################################################
 * String Utils
 * #############################################################################
 */

	// @see: http://stackoverflow.com/a/646643
	if (typeof String.prototype.startsWith != 'function') {
		String.prototype.startsWith = function (str){
			return this.slice(0, str.length) == str;
		};
	}

	// @see: http://stackoverflow.com/a/646643
	if (typeof String.prototype.endsWith != 'function') {
		String.prototype.endsWith = function (str){
			return this.slice(-str.length) == str;
		};
	}

	if (typeof String.prototype.explode != 'function') {
		String.prototype.explode = function(delimiter) {
			this.split(delimiter);
		}
	}
