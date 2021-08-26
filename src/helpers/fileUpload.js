
// * Process to upload images to cloudinary.com 

export const fileUpload = async (file) => {
	const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/fimbres/upload'

	const formData = new FormData();
	formData.append('upload_preset', 'gitBlog');
	formData.append('file', file);

	try {

		const resp = await fetch(cloudinaryUrl, {
			method: 'POST',
			body: formData
		});

		if (resp.ok) {
			const cloudinaryResp = await resp.json();
			return cloudinaryResp.secure_url;
		} else {
			// * Here it's show the error from cloudinary.com
			throw await resp.json();
		}

	} catch (err) {
		// * Here it´s show error like bad URL
		throw err;
	}

}