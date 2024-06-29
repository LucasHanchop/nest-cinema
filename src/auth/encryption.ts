import * as bcrypt from 'bcrypt'
const enc = process.env.ENCRYPT

export const encryptionFc = async (password: string | undefined): Promise<string> => {
    const hash = await bcrypt.hash(password!, 10)
    return hash
} 