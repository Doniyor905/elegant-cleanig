$( document ).ready( function () {
	$( 'form' ).submit( function ( event ) {
		event.preventDefault();

		let form = $(this);
		let action = form.attr( 'action' );
		let method = form.attr( 'method' );

		var form_data = new FormData();

		let inputs = form.children( 'div' ).children( '.formBlock' ).children( 'input' );
		// inputs.push(form.children( 'div' ).children( '.formBlock' ).children( 'textarea' ));
		let select = form.children( 'div' ).children( '.formBlock' ).children( 'select' );

		var check = true;
		if ( $( form ).attr( 'data-error' ) !== undefined ) {
			for (var i = 0; i < inputs.length; i++) {

				let val = $(inputs[i]).val().length;
				let min = $(inputs[i]).attr( 'minlength' );
				let max = $(inputs[i]).attr( 'maxlength' );
				let errorText = $(inputs[i]).data( 'error' );

				if (val < min || val > max) {
					$( inputs[i] ).next( '.error-text' ).css( 'opacity', '1' );
					$( inputs[i] ).next( '.error-text' ).text( errorText );
					check = false;
				}else{
					$( inputs[i] ).next( '.error-text' ).css('opacity', '0');
					form_data.set($(inputs[i]).attr('name'), $(inputs[i]).val());
				}
			}
		}

		if ( check ) {
			$.ajax({
				url: action,
		        type: method,
		        dataType: 'text',
		        cache: false,
		        contentType: false,
		        processData: false,
		        data: form_data, 
		        beforeSend: function () {
		        	$('.loader').css('display', 'flex');
		        },                       
		        success: function(response){
		 			$('.loader').css('display', 'none');
		 			console.log(response); 

		 			response = JSON.parse(response);

		 			switch (response['type']){
		 				case 'invalid': alert(response['error']); break;
		 				case 'success': window.location.href = response['url']; break;
		 				case 'mail': alert(response['text']); window.location.reload(); break;
		 			}
		        },
			});
		}
	});
});