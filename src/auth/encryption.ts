import * as bcrypt from 'bcrypt'

export const encryptionFc = async (password: string | undefined): Promise<string> => {
    const hash = await bcrypt.hash(password!, 10)
    return hash
} 