const MatrixBackground = () => {
    return (
        <div className="fixed inset-0 -z-20 bg-dark overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

            {/* Floating Particles (Simulated) */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl" />
        </div>
    );
};

export default MatrixBackground;
