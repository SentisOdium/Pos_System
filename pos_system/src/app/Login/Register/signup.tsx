import {SignupFormSchema, FormState} from '@/lib/defenitions';
import UserData from '@/lib/userdata';

export async function signup(state: FormState, formData: FormData) {
    const rawData = UserData(formData);

    const validatedFields = SignupFormSchema.safeParse(rawData);

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try{
      
    }catch(err){

    }
}
