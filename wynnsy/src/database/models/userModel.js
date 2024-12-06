import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    token: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    discord_account: { type: Object, required: true },
    wallet_address: { type: String, required: true, unique: true }, 
    balance: { type: Number, default: 0 },
    ip_address: { type: String, required: true },
    referral_code: { 
        referral_code_used: { type: Number, default: 0 },
        referral_code_id: { type: String, required: true, unique: true }
    },
    referred_by: { type: String, default: null },
    level: { type: Number, default: 1 },
    total_wins: { type: Number, default: 0 },
    total_losses: { type: Number, default: 0 },
    last_login: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    isBanned: { type: Boolean, default: false },
    roles: { type: [String], default: ['user'] },
    avatar_url: { type: String, default: 'default-avatar.png' },
    game_history: [
        {
            game: { type: String, required: true },
            result: { type: String, enum: ['win', 'loss', 'draw'], required: true },
            amount: { type: Number, required: true },
            potential_win: { type: Number, default: 0 },
            date: { type: Date, default: Date.now },
        },
    ],
});

export default mongoose.models.users || mongoose.model('users', UserSchema);
