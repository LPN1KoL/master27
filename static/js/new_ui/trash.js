function update_uitp_count_up(uid, pid) {
    let new_value = document.getElementById(`p-${pid}`).value

    let xhr = new XMLHttpRequest()
    xhr.open('POST', `/up_uitp_count`, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = "json"

    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            document.getElementById(`p-${pid}`).value = xhr.response['count']
			document.getElementById('ts').innerText = `Общая стоимость: ${xhr.response['sm']} ₽`

        }
    };

    xhr.send(`uid=${uid}&pid=${pid}`);
}

function update_uitp_count_down(uid, pid) {
    let new_value = document.getElementById(`p-${pid}`).value

    let xhr = new XMLHttpRequest()
    xhr.open('POST', `/down_uitp_count`, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = "json"

    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

               tp = xhr.response['tp']

            if (xhr.response['in_trash'] === false) {
                document.getElementById(`tp-${tp}`).remove()
            } else {
                document.getElementById(`p-${pid}`).value = xhr.response['count']
            }

			document.getElementById('ts').innerText = `Общая стоимость: ${xhr.response['sm']} ₽`

        }
    };

    xhr.send(`uid=${uid}&pid=${pid}`);
}

function rm_prd(pid) {
	let xhr = new XMLHttpRequest()
    xhr.open('POST', `/remove_product_from_trash`, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = "json"

    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

			window.location.reload()

        }
    };

    xhr.send(`pid=${pid}`);
}

function add_order(uid) {
	let xhr = new XMLHttpRequest()
    xhr.open('POST', `/add_order`, true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = "json"

    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

			window.location.reload()

        }
    };

    xhr.send(`uid=${uid}`);
}
